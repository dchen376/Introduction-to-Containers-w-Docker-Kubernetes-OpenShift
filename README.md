**Understanding Kubernetes Architecture**

**Kubernetes objects:** (consists of Object spec and Status)
- pods: the simplest unit in Kubernetes
- namespaces: provides a mechanism for isolating groups of resources within a single cluster.
- deployments: a higher-level object that provides updates for Pods and ReplicaSets.
- replicaSets: a set of horizontally scaled running Pods.

* labels are key/value pairs attached to objects.

**Service** (a REST object, like Pods)
ClusterIp: assined a cluster-internal IP address that makes the Service only reachable within cluster.<br>
NodePort: an extension of ClusterIP Service; routes incoming requests automatically to ClusterIP service.<br>
LoadBalancer: creates NOdePort and ClusterIP services automatically.<br>
External Name Services: maps to a DNS name and not to any selector.<br>
Ingress: an API object (combined with a controller) that provides routing rules to manage external users' access to multiple services in a Kubernetes cluster. <br>
Daemonset: an Object that makes sure that Nodes run a copy of a Pod.<br>
StatefulSet: an object that manages stateful applications; manages deployment and scaling of Pods.<br>
A Job: an object that creates Pods and tracks its completion process.<br>

**Kubectl** (Kube Control)<br>
It is the Kubernetes command line Interface (CLI)<br>
Kubectl [command] [type] [name] [flags]<br>
