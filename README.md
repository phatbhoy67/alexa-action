# Alexa Rank javascript action

This action prints the Alexa Rank of the site to the log.

## Inputs

### `site-url`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `rank`

The Alexa Rank of the site.

## Example usage

uses: actions/alexa-action@v1
with:
site-url: 'github.com'
