import json

class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def main():
    with open('/tmp/test.json') as f:
        print("opened test.json successfully from /tmp")
        test_cases = json.load(f)

    solution = Solution()
    results = {}
    for input_data, expected_output in test_cases.items():
        input_data = eval(input_data)  # Convert string representation of list to actual list
        output = solution.levelOrder(input_data)
        results[str(input_data)] = output

    with open('/tmp/output/output.json', 'w') as f:
        json.dump(results, f, indent=4)

if __name__ == "__main__":
    main()
