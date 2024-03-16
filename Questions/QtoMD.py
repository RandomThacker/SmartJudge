import os

def extract_number_from_directory(dirname):
    # Remove leading './' if present
    dirname = dirname.lstrip('./')

    # Check if the directory name starts with a number
    if dirname[0].isdigit():
        # Find the index of the first non-digit character
        index = 0
        while index < len(dirname) and dirname[index].isdigit():
            index += 1
        return int(dirname[:index])
    else:
        return None
    
# Function to convert Markdown files to TypeScript files
def convert_markdown_to_ts(directory):
    # Read all files in the specified directory
    for filename in os.listdir(directory):
        if filename.lower().endswith('.md'):
            md_file_path = os.path.join(directory, filename)
            ts_file_path = os.path.join(directory, os.path.splitext(filename)[0] + '.ts')
            with open(md_file_path, 'r', encoding='utf-8') as md_file:
                md_content = md_file.read()
                directory_number = extract_number_from_directory(directory)
                ts_content = f"export const question{directory_number}: string = {repr(md_content)};"
                with open(ts_file_path, 'w', encoding='utf-8') as ts_file:
                    ts_file.write(ts_content)

# Call the function with the directory containing Markdown files
directory = './1'  # Adjust the path accordingly
convert_markdown_to_ts(directory)
