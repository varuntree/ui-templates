import CMS from 'decap-cms-app'
import { NavbarPreview } from './preview-templates/NavbarPreview'



CMS.registerPreviewTemplate('config', NavbarPreview)

console.log("heloow this is indeed registerd")