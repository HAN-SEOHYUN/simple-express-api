const {Router} = require('express');
const router = Router();

const supermarkets = [
    {
        store : '월마트',
    },
    {
        store : '킹마트',
    },
    {
        store : '내고향 마트',
    }
]
router.get('', (req, res) => {
    res.send(supermarkets);
});

module.exports = router;