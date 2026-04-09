# Use From the Terminal
*Connect your agency to Claude Code for command-line access*

Claude Code is a command-line tool for developers. If you use the terminal (also called the command line), you can connect your NotRealSmart agency so Claude Code can use your marketing tools directly.

> **Tip:** This article is for technical users. If you are not comfortable with the terminal, use Claude Desktop or the web app instead.

## Get an API key

You will need an API key from your NotRealSmart account.

1. Log in to NotRealSmart at notrealsmart.com.au.

2. Go to Settings and create a new API key.

3. Copy the key (starts with nrs_sk_).

## Configure the MCP connection

Add your NotRealSmart server to your Claude Code MCP configuration file. The file is usually at ~/.mcp.json in your home directory.

1. Open ~/.mcp.json in any text editor.

2. Add an entry for NotRealSmart with the URL https://www.notrealsmart.com.au/api/mcp and your API key as the Bearer token.

3. Save the file and restart Claude Code.

## Example configuration

Your MCP config entry should look something like this: a "notrealsmart" key with the server URL and an authorization header containing "Bearer nrs_sk_your_key_here". Check the Claude Code documentation for the exact format, as it may vary between versions.

## Using it

Once configured, you can tell Claude Code to use your NotRealSmart tools. For example: "Use NotRealSmart to write a blog post for Downscale about weight loss tips" or "Check my Downscale analytics via NotRealSmart." Claude Code will call your agency tools automatically.

---
Tags: terminal, command line, claude code, cli, developer, mcp, technical, config