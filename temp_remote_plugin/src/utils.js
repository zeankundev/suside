import { normalize, extname } from 'path'

export const sanitizePath = path => normalize(path).replace(/\\/g, '/')

export const getExtension = path => extname(path).split('.')[1]

