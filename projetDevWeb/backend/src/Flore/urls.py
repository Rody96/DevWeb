from rest_framework import routers
from .api import ArbreViewSet, FleurViewSet

router = routers.DefaultRouter()
router.register('api/Flore', ArbreViewSet, 'Arbre')

urlpatterns = router.urls