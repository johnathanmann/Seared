const router = require('express').Router();
const { Comments } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const allComments = await Comments.findAll();
    res.json(allComments);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const singleComment = await Comments.findByPk(req.params.id);
    res.json(singleComment);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const createComment = await Comments.create(req.body);
    res.json(createComment);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const removeComment = await Comment.destroy({
      where: { id: req.params.id },
    });
    res.json(removeComment);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
