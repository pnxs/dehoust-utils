# dehoust-utils
Javascript library to calculate fluid level of DEHOUST oil tanks

## Usage

Select tank model, e.g. DEHOUST GFK 2000.

```javascript
var dehoust_utils = require('dehoust-utils');
var model = dehoust_utils.models.gfk_2000;

var height = 500; // 500mm

// fluidLevel in litre
var fluidLevel = dehoust_utils.calculateFluidLevel(model, height);
´´´
