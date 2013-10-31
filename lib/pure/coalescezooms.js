var xd = Math.pow(2, 39),
    yd = Math.pow(2, 25),
    mp2_14 = Math.pow(2, 14),
    mp2_28 = Math.pow(2, 28);

module.exports = function coalesceZooms(grids, feats, types, zooms, indexes) {
    var coalesced = {},
        grid,
        feat,
        z, x, y,
        pxy, p, s;

    // Coalesce relevs into higher zooms, e.g.
    // z5 inherits relev of overlapping tiles at z4.
    // @TODO assumes sources are in zoom ascending order.
    for (h = 0; h < grids.length; h++) {
        grid = grids[h];
        feat = feats[h];
        z = indexes[types[h]]._carmen.zoom;
        for (i = 0; i < grid.length; i++) {
            f = feat[grid[i] % yd];

            if (!f) continue;
            x = Math.floor(grid[i]/xd);
            y = Math.floor(grid[i]%xd/yd);
            zxy = (z * mp2_28) + (x * mp2_14) + y;

            // @TODO this is an optimization that  assumes multiple
            // DBs do not use the same zoom level.
            if (!coalesced[zxy]) coalesced[zxy] = [f];

            for (a = 0; zooms[a] < z; a++) {
                p = zooms[a];
                s = 1 << (z-p);
                pxy = (p * mp2_28) + (Math.floor(x/s) * mp2_14) + Math.floor(y/s);

                if (coalesced[pxy]) {
                    coalesced[zxy].push.apply(coalesced[zxy], coalesced[pxy]);
                }
            }
        }
    }

    return coalesced;
};