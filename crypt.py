# 加密逻辑
def encrypt(text, keys=[4,7,2]):
    result = ""
    key_len = len(keys)

    for i, ch in enumerate(text):
        if ch.isalpha():
            base = ord('a')
            offset_base = ord(ch.lower()) - base
            key = keys[i % key_len]
            offset = (offset_base + key) % 26
            result += chr(base + offset)
        else:
            result += ch

    return result


# 解密逻辑
def decrypt(text, keys=[4,7,2]):
    result = ""
    key_len = len(keys)

    for i, ch in enumerate(text):
        if ch.isalpha():
            base = ord('a')
            offset_base = ord(ch.lower()) - base
            key = keys[i % key_len]
            offset = (offset_base - key) % 26
            result += chr(base + offset)
        else:
            result += ch

    return result

# 获取加密后的文本
# print(encrypt("Server started. Waiting for requests..."))
