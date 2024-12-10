**Understanding Kubernetes Architecture**

**Kubernetes objects:** (consists of Object spec and Status)
- pods: the simplest unit in Kubernetes
- namespaces: provides a mechanism for isolating groups of resources within a single cluster.
- deployments: a higher-level object that provides updates for Pods and ReplicaSets.
- replicaSets: a set of horizontally scaled running Pods.

* labels are key/value pairs attached to objects.

**Service** (a REST object, like Pods)
ClusterIp: assined a cluster-internal IP address that makes the Service only reachable within cluster.
NodePort: an extension of ClusterIP Service; routes incoming requests automatically to ClusterIP service.
LoadBalancer: creates NOdePort and ClusterIP services automatically.
External Name Services: maps to a DNS name and not to any selector.
Ingress: an API object (combined with a controller) that provides routing rules to manage external users' access to multiple services in a Kubernetes cluster. 
Daemonset: an Object that makes sure that Nodes run a copy of a Pod.
StatefulSet: an object that manages stateful applications; manages deployment and scaling of Pods.
A Job: an object that creates Pods and tracks its completion process.

**Kubectl** (Kube Control)
It is the Kubernetes command line Interface (CLI)
Kubectl [command] [type] [name] [flags]
