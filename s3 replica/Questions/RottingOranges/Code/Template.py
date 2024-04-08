import json
from Default import Solution  # Assuming your default.py file is in the same directory

def main():
    with open('test.json') as f:
        test_cases = json.load(f)

    solution = Solution()
    results = {}
    for input_data, expected_output in test_cases.items():
        grid = eval(input_data)  # Convert string representation of list to actual list
        output = solution.orangesRotting(grid)
        results[input_data] = output

    with open('output.json', 'w') as f:
        json.dump(results, f, indent=4)

if __name__ == "__main__":
    main()
