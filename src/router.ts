import express, {Request, Response} from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Home Page');
});

router.get('/login', (req: Request, res: Response) => {
    res.send('Login PAge');
});

router.get('/signup', (req: Request, res: Response) => { // use '/sign-up' too
    res.send('Login PAge');
});

export default router;