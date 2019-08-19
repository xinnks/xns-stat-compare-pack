# xns-stat-compare-pack

A representational stat pack for comparing two sources.


### install

```sh
$ npm i xns-stat-compare-pack
```


### Import & initiate plugin on your entry js file

```sh
    import XnsStatComparePack from 'xns-stat-compare-pack'

    Vue.use(XnsStatComparePack)
```


### Example

```sh
<xns-stat-compare-pack
    :sp-width=""
    :sp-height=""
    :color-one=""
    :color-two=""
    :size-one=""
    :size-two=""
    :stats-color=""
    :sp-title=""
    :title-color=""
></xns-stat-compare-pack>
```


## Options

| Option | Required | Default |
| ------ | -------- | ------- |
| spWidth | false | 300px |
| spHeight | false | 50px |
| colorOne | true | none |
| colorTwo | true | none |
| sizeOne | true | none |
| sizeTwo | true | none |
| statsColor | true | none |
| spTitle | true | none |
| titleColor | true | none |