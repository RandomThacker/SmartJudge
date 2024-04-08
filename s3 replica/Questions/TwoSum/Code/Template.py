import json
def main():
    try:
        with open('/tmp/test_output.txt', 'r') as f:
            lines = f.readlines()

        solution = Solution()
        results = {"pass": [], "fail": []}

        for i in range(0, len(lines), 2):
            input_data = json.loads(lines[i].strip())  # Parse input_data from JSON string
            expected_output = json.loads(lines[i+1].strip())  # Parse expected_output from JSON string

            output = solution.twoSum(input_data[0], input_data[1])  # Pass individual arguments to twoSum
            if output == expected_output:
                results["pass"].append(input_data)
            else:
                results["fail"].append(input_data)

        with open('/tmp/output/output.json', 'w') as output_file:
            json.dump(results, output_file, indent=4)

        print("Execution completed.")
    except Exception as e:
        print(f"Error executing code: {e}")
        raise e

if __name__ == "__main__":
    main()