import os
import re
import glob

def parse_files(pattern):
    files = glob.glob(pattern)
    lines = []
    for file in files:
        with open(file) as f:
            lines += f.readlines()
    return lines

def preprocess_text(lines):
    cleaned = []
    for line in lines:
        cleaned.append(re.sub(r'[^\w\s]', '', line))
    return cleaned

def get_word_count(lines):
    word_dict = {}
    for line in lines:
        words = line.split()
        for word in words:
            if word not in word_dict:
                word_dict[word] = 1
            else:
                word_dict[word] += 1
    return word_dict

def print_top(word_dict, num_words):
    count = len(word_dict)
    total = sum(word_dict.values())
    top = sorted(word_dict.items(), key=lambda x: -x[1])[:num_words]
    for i, (word, count) in enumerate(top):
        print("{:3}: {:5}: {:3}%".format(i+1, word, int(count/total*100)))

def main():
    pattern = "*.txt"
    lines = parse_files(pattern)
    lines = preprocess_text(lines)
    word_dict = get_word_count(lines)
    print_top(word_dict, 20)

if __name__ == "__main__":
    main()