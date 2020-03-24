from django.urls import include, path
from django.conf.urls import url
from rest_framework import routers
from . import views
from rest_framework_swagger.views import get_swagger_view

router = routers.DefaultRouter()
router.register('api/Arbres_Remarquables', views.ArbresViewSet)

schema_view = get_swagger_view(title="Documentation API")

urlpatterns = [
    url(r'^$', schema_view),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))

]