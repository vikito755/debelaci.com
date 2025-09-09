from rest_framework import serializers
from feedback.models import Feedback


class FeedbackSerializer(serializers.Serializer):
    message = serializers.CharField(required=False, allow_blank=True, max_length=1000)
    
    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Feedback.objects.create(**validated_data)
