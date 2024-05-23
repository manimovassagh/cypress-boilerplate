package main

import (
	"fmt"
	"os"
	"os/exec"
)

func runCommand(command string) error {
	cmd := exec.Command("sh", "-c", command)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	return cmd.Run()
}

func main() {
	commands := []string{
		"npm run dev",
	}

	for _, command := range commands {
		fmt.Printf("Running %s\n", command)
		if err := runCommand(command); err != nil {
			fmt.Printf("Error executing %s: %v\n", command, err)
			os.Exit(1)
		}
	}

	fmt.Println("All tests ran successfully.")
}
