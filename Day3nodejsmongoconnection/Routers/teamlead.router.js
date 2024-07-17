import express from 'express';
import { createTeamLead, getAllTeamleads, getAssignedEmployee } from '../Controllers/teamlead.controller.js';

const router = express.Router()

router.post('/create/teamlead', createTeamLead)
router.get('/getteamleads', getAllTeamleads)
router.get('/:id', getAssignedEmployee)

export default router;
