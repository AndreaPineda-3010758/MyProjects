const Joi=require('joi');

const arrayString=['banana','bacon','cheese'];
const arrayObjects=[{example:'example1'},{example:'example2'},{example:'example3'}];

const userInput={personalInfo:{
                    streetAddress:'123987987',
                    city:'kljlkajd',
                    state:'fl'
                },
                preferences:arrayObjects};

const personalInfoSchema=Joi.object().keys({
    streetAddress:Joi.string().trim().required(),
    city:Joi.string().trim().required(),
    state:Joi.string().trim().length(2).required()
});
//const preferencesSchema=Joi.array().items(Joi.string());
const preferencesSchema=Joi.array().items(Joi.object().keys({
    example: Joi.string().required()
}));

const schema =Joi.object().keys({
    personalInfo:personalInfoSchema,
    preferences:preferencesSchema
});

const validate=schema.validate(userInput);
console.log(validate);

//////////////////////////////////////////////////
//    // This is a shorter version
//    const { error } = schema.validate(req.body);

//    // This will send the specify error to the user
//    res.send(error.details[0].message);
