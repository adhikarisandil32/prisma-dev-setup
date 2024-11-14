import { NextFunction } from "express"

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({ message: "post created successfully" })
  } catch (error) {
    next(error)
  }
}

const createProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({ message: "profile created successfully" })
  } catch (error) {
    next(error)
  }
}

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({ message: "user created successfully" })
  } catch (error) {
    next(error)
  }
}

export { createPost, createProfile, createUser }
