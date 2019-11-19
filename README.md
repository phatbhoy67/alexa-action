# Alexa Rank javascript action

This action prints the Alexa Rank of the site to the log.

## Inputs

### `site-url`

**Required** The tld to get Alexa rank for. Default `"github.com"`.

## Outputs

### `rank`

The Alexa Rank of the site.

## Example usage

```yaml
uses: actions/alexa-action@v1
with:
  site-url: "github.com"
```
