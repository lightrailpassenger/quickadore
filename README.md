A handy script for generating a triangular array of emojis that can be pasted
into Slack.

On Slack, an emoji can be typed by `:name:`. As an example, suppose there is an
added emoji called `quickadore`, we can run

```
deno run main.ts :quickadore: Manager 5
```

to get the following result to praise the manager:

```
:quickadore:
:quickadore: :quickadore:
:quickadore: :quickadore: :quickadore:
:quickadore: :quickadore: :quickadore: :quickadore:
:quickadore: :quickadore: :quickadore: :quickadore: :quickadore:  Manager
:quickadore: :quickadore: :quickadore: :quickadore:
:quickadore: :quickadore: :quickadore:
:quickadore: :quickadore:
:quickadore:
```
