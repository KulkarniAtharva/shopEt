import express from 'express';
import User from '../models/userModels'
import { getToken } from '../util';
import bcrypt from 'bcrypt';

const saltRounds = 10;

const router = express.Router();


router.post('/signin', async( req, res)=> {

    const signinUser = await User.findOne({
        email: req.body.email,
    });

    if(signinUser!=null)
    {
      bcrypt.compare(req.body.password,signinUser.password,function(err, isMatch) {
        if (err) {
          throw err
        } else if (!isMatch) {
          res.send({ msg:'Invalid email or password'})
        } else {
          res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
        })
  
        }
      })
    }
    else
    {
      res.send({ msg:'No User found for this email'})

    }

    

    /*if(signinUser)
    { 
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
        })

    }
    else{
        res.status(404).send({ msg:'Invalid email or password.',pass:hash})
    }*/
});

router.post("/signup", async(req,res) => {

  //let encryptedpassword = '';

  //encryptedpassword = bcrypt.hashSync(req.body.password,saltRounds);

  const salt = await bcrypt.genSalt(saltRounds);
  var hash = await bcrypt.hash(req.body.password,salt);


  try{
    const user = new User({
      name:req.body.name,
      email:req.body.email,
      password:hash
    });

    const signupUser = await user.save();
    res.send(signupUser);
  

  }
  catch(error)
  {
    res.send({msg:error.message});
  }


});

router.get("/createadmin", async (req, res) => {

  const salt = await bcrypt.genSalt(saltRounds);
  var hash = await bcrypt.hash('adwait',salt);
    try {
      const user = new User({
        name: 'Adwait',
        email: 'adwaitgondhalekar@gmail.com',
        password: hash,
        isAdmin: true
      });
      const newUser = await user.save();
      res.send(newUser);
    } catch (error) {
      res.send({ msg: error.message });
    }
  });
  
  export default router;