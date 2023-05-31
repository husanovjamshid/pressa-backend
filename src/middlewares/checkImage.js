function checkImage(req, res, next) {
	if (!req.file) {
		return res
			.status(400)
			.json({ status: 400, message: 'Image is not selected' });
	}
	// Fayl turi tekshiriladi
	if (
		req.file.mimetype == 'image/png' ||
		req.file.mimetype == 'image/jpg' ||
		req.file.mimetype == 'image/jpeg'
	) {
		// Rasm yuborilgan, keyingi middleware-ga o'tish
		next();
	} else {
		return res.status(400).json({ status: 400, message: 'Only send an image' });
	}
}

export default checkImage;
