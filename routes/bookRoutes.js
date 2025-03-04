import express from 'express';
import bookCTRL from '../controllers/bookcontrollers.js';
const router = express.Router();


router
  .route('/')
  .post(bookCTRL.createBook)
  .get(bookCTRL.getAllBooks);
router
  .route('/:id')
  .get(bookCTRL.getBook)
  .put(bookCTRL.updateBook)
  .delete(bookCTRL.deleteBook);
 

router.get('*', (req, res)=>{
  res.send('Invalid Route: 404')
})

export default router;


