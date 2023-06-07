//@desc        Get all bootcamps
//@route       Get /api/v1/bootcamps
//@access      Public

exports.getBootcamps = (req, res, next) =>{
    res.status(200).json({ success: true, msg: "Hello Show all bootcamp" });
}

//@desc        Get all bootcamp
//@route       Get /api/v1/bootcamps/:id
//@access      Private

exports.getBootcamp = (req, res, next) =>{
    res.status(200).json({
        success: true,
        msg: `Hello show a single bootcamp ${req.params.id}`,
      });
}


//@desc        Create new bootcamp
//@route       POST /api/v1/bootcamps
//@access      Private

exports.createBootcamp = (req, res, next) =>{
    res
    .status(200)
    .json({ success: true, msg: `Hello create new bootcamp ${req.params}` });
}


//@desc        Update bootcamp
//@route       PUT /api/v1/bootcamps/:id
//@access      Private

exports.updateBootcamp = (req, res, next) =>{
    res
    .status(200)
    .json({ success: true, msg: `Hello update new bootcamp ${req.params.id}` });
}


//@desc        Delete bootcamp
//@route       DELETE /api/v1/bootcamps/:id
//@access      Private

exports.deleteBootcamp = (req, res, next) =>{
    res
    .status(200)
    .json({ success: true, msg: `Hello delete new bootcamp ${req.params.id}` }); 
}