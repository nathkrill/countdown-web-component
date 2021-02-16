# countdown-web-component
Web Component to countdown to a certain date

## Usage

 1. Install the package `npm install @nathkrill/countdown-web-component`
 2. Include `dist/js/countdown.min.js` in your project.
 3. Use in HTML:
 ```
    <countdown-clock
        date='2021-10-04 09:30'
        format='${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds, ${milliseconds} Milliseconds'
    ></countdown-clock>
 ```

## Attributes

Name | Description
--- | ---
`date` | Date string when you are counting down to
`format` | String to output. Use `${days}` etc to replace with the values. Any omitted values will be added to the next lowest format. E.g if you leave out days, then hours will include the no. of days.

## Development

Clone the repo, and use `npm run develop` to watch the js. `npm run build` builds minified JS.