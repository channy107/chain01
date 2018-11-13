from django.shortcuts import render
from django.views.generic.base import TemplateView


# Create your views here.
class VoteView(TemplateView):
    template_name = "votes_list.html"