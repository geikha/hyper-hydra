import re
import base64
from urllib.parse import unquote, quote

REPLACEMENTS = [
    ("https://hyper-hydra.glitch.me/","https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/")
]

README_PATH = "README.md"

def decode_hydra_code(encoded: str) -> str:
    """URL decode -> base64 decode -> URL decode"""
    # First URL decode (in case the base64 itself is URL-encoded like %3D%3D)
    url_decoded = unquote(encoded)
    # Base64 decode
    decoded_bytes = base64.b64decode(url_decoded)
    decoded_str = decoded_bytes.decode('utf-8')
    # URL decode again (the content inside base64 is URL-encoded)
    return unquote(decoded_str)

def encode_hydra_code(code: str) -> str:
    """URL encode -> base64 encode"""
    # URL encode (using quote with safe='' to encode everything except alphanumerics)
    url_encoded = quote(code, safe='')
    # Base64 encode
    b64_encoded = base64.b64encode(url_encoded.encode('utf-8')).decode('utf-8')
    return b64_encoded

def process_url(match: re.Match) -> str:
    """Process a single URL match and return the updated URL"""
    full_url = match.group(0)
    code_param = match.group(1)
    
    try:
        # Decode the code
        decoded = decode_hydra_code(code_param)
        
        # Apply replacements
        modified = decoded
        for old, new in REPLACEMENTS:
            modified = modified.replace(old, new)
        
        # If no changes were made, return original URL
        if modified == decoded:
            return full_url
        
        # Re-encode
        new_code = encode_hydra_code(modified)
        
        # Replace the code parameter in the URL
        new_url = full_url.replace(code_param, new_code)
        
        print(f"Updated URL:")
        print(f"  Old code: {decoded[:80]}...")
        print(f"  New code: {modified[:80]}...")
        print()
        
        return new_url
    except Exception as e:
        print(f"Error processing URL: {e}")
        return full_url

def main():
    if not REPLACEMENTS:
        print("No replacements configured!")
        print("Edit the REPLACEMENTS list at the top of this script.")
        print()
        print("Example:")
        print('  REPLACEMENTS = [')
        print('      ("old_string", "new_string"),')
        print('  ]')
        return
    
    # Read README
    with open(README_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match hydra URLs with code parameter
    # Matches URLs like: https://hydra.ojack.xyz/?code=BASE64STRING
    # Includes % to match URL-encoded characters (like %3D for =)
    pattern = r'https://hydra\.ojack\.xyz/\?code=([A-Za-z0-9+/=%]+)'
    
    # Process all URLs
    updated_content = re.sub(pattern, process_url, content)
    
    # Write back
    with open(README_PATH, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print("README.md has been updated!")

if __name__ == "__main__":
    main()
