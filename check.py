class Baugesuche_Attachment(models.Model):
    file_name = models.CharField(max_length=100)
    path = models.CharField(max_length=50)
    type = models.CharField(max_length=50)
    request = models.ForeignKey(Baugesuche_Request, on_delete=models.DO_NOTHING)




attachment.py 
from portal.models import Baugesuche_Attachment as Attachment
import logging

import os

logger = logging.getLogger('django')

class AttachmentProcessor:   
    def addAttachment(self, request_id, file_name, file_type, file_path):
        new_attachment = Attachment(request_id=request_id, file_name=file_name, path=file_path, type=file_type);
        new_attachment.save();
        return new_attachment
    
    def getAttachment(self, attachment_id):
        attachment = Attachment.objects.get(pk=attachment_id)
        return attachment
    
    def deleteAttachment(self, attachment_id):
        
        attachment = self.getAttachment(attachment_id)
        filepath = attachment.path + attachment.file_name
        
        try:
            if os.path.isfile(filepath):
                os.remove(filepath)
                attachment.delete()
        except Exception as inst:
                logger.error(inst)




views.py :
@login_required
def deleteAttachment(request):
    # checking if user has permission to perform this operation
    appPerms = request.session["appPerms"]
    right_handler = RightHandler()
    permissions = right_handler.getPermissionOnApplication(appPerms, Constants.APPLICATION_NAME_BAUGESUCHE)
    if 'all' not in permissions and 'change_data' not in permissions:
        return HttpResponse(status=403)

    attachment_id = request.GET.get('attachment_id')
    attachment_processor = AttachmentProcessor()
    attachment_processor.deleteAttachment(attachment_id)
    try:
        attachment_processor.getAttachment(attachment_id)
        return HttpResponse(status=404)
    except:
        return HttpResponse(status=200)
