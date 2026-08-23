import { setupWorker } from 'msw/browser'
import { libraryHandlers } from './handlers/library'

export const worker = setupWorker(...libraryHandlers)
