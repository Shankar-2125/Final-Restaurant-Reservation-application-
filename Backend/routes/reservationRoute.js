import express from 'express';                                              
import {sendReservation} from '../controler/reservation.js'
const router=express.Router(); 
router.get('/', (req, res) => {  
    // Route logic               
                                
    res.send('Reservation Route'); 
  });
router.post("/send",sendReservation)  
export default router;               