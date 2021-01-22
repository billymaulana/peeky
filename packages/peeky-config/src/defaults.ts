import { PeekyConfig } from './types'

export const peekyConfigFileMatch = ['peeky.config.(js|ts)']

export const defaultPeekyConfig: () => PeekyConfig = () => ({
  targetDirectory: process.cwd(),
  match: ['**/*.(spec|test).(ts|js)', '**/__tests__/**/*.(ts|js)'],
  ignored: ['node_modules'],
})
