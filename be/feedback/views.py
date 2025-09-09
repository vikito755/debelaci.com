from feedback.models import Feedback
from feedback.serializers import FeedbackSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail

admin_mail = "thereasonablepotato@gmail.com"

class FeedbackViewSet(viewsets.ViewSet):
    
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    
    def create(self, request ):
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            send_mail("Debelaci.com - mail",
            serializer.data['message'],
            admin_mail,
            [admin_mail],
            fail_silently=False)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)