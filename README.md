# xns-stat-compare-pack

A representational stat pack vue plugin for comparing two sources.


![xns-stat-compare-pack](https://user-images.githubusercontent.com/8682363/63289784-9cb70a80-c2c8-11e9-90ab-b86d0668d4b7.png)

[![](https://badgen.net/npm/v/xns-stat-compare-pack)](https://badgen.net/npm/v/xns-stat-compare-pack) [![](https://badgen.net/npm/license/xns-stat-compare-pack)](https://badgen.net/npm/license/xns-stat-compare-pack) [![](https://badgen.net/packagephobia/publish/xns-stat-compare-pack)](https://badgen.net/packagephobia/publish/xns-stat-compare-pack) [![](https://badgen.net/bundlephobia/minzip/xns-stat-compare-pack)](https://badgen.net/bundlephobia/minzip/xns-stat-compare-pack)


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
    :sp-width="300"
    :sp-height="50"
    :color-one="'#c70102'"
    :color-two="'#383838'"
    :size-one="16"
    :size-two="21"
    :stats-color="'white'"
    :sp-title="'Total Tackles'"
    :title-color="'white'"
></xns-stat-compare-pack>
```


## Options

| Option | Type | Required | Default |
| ------ | ---- | -------- | ------- |
| spWidth | Number | false | 300px |
| spHeight | Number | false | 50px |
| colorOne | String | true | none |
| colorTwo | String | true | none |
| sizeOne | String | true | none |
| sizeTwo | String | true | none |
| statsColor | String | true | none |
| spTitle | String | true | none |
| titleColor | String | true | none |
