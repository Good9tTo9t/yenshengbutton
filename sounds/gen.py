import os

def list_mp3_files_in_current_directory():
    current_directory = os.getcwd()
    mp3_files = [f.split('.')[0] for f in os.listdir(current_directory) if f.lower().endswith('.mp3') and os.path.isfile(os.path.join(current_directory, f))]
    return mp3_files

def write_to_txt(file_list, output_file="list.txt"):
    with open(output_file, "w") as file:
        for item in file_list:
            file.write("%s\n" % item)

if __name__ == "__main__":
    mp3_files = list_mp3_files_in_current_directory()
    
    if mp3_files:
        print("MP3 files in the current directory (without extensions):")
        for mp3_file in mp3_files:
            print(mp3_file)
        
        write_to_txt(mp3_files)
        print("File list written to file_list.txt")
    else:
        print("No MP3 files found in the current directory.")
