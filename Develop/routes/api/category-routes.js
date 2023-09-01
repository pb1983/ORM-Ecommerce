const router = require('express').Router();
const { Category, Product } = require('../../models');



//Get all categories
router.get('/', async(req, res) => {
  try {

  const categoryData = await Category.findAll({
  include: [{ model: Product }],
  })
  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});

//Get single category by id
router.get('/:id', async(req, res) => {
  try {

    const categoryData = await Category.findByPk(req.params.id, {
    include: [{ model: Product }],
    })
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  });

//Create new category
router.post('/', async(req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body)
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//Update category info by ID
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

//Remove category by ID
router.delete('/:id', async(req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;
