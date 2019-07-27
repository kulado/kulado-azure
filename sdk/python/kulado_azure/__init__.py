# coding=utf-8
# *** WARNING: this file was generated by the Kulado Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import importlib
# Make subpackages available:
__all__ = ['ad', 'apimanagement', 'appinsights', 'appservice', 'automation', 'autoscale', 'batch', 'cdn', 'cognitive', 'compute', 'config', 'containerservice', 'core', 'cosmosdb', 'databricks', 'datafactory', 'datalake', 'ddosprotection', 'devspace', 'devtest', 'dns', 'eventhub', 'hdinsight', 'iot', 'keyvault', 'lb', 'loganalytics', 'logicapps', 'managementgroups', 'managementresource', 'mariadb', 'mediaservices', 'monitoring', 'msi', 'mssql', 'mysql', 'network', 'notificationhub', 'operationalinsights', 'policy', 'postgresql', 'privatedns', 'recoveryservices', 'redis', 'relay', 'role', 'scheduler', 'search', 'securitycenter', 'servicefabric', 'signalr', 'sql', 'storage', 'streamanalytics', 'trafficmanager']
for pkg in __all__:
    if pkg != 'config':
        importlib.import_module(f'{__name__}.{pkg}')

# Export this package's modules as members:
from .provider import *