## -sit323-737-2023-t1-prac7c

#7.2C: Interacting with Kubernetes

firstly, Import the 7.1P folder in Visual Studio Code.
then, Get the bearer token for login
Command  kubectl -n kubernetes-dashboard create token admin-user
Access the dashboard at http://localhost:8001/api/v1/namespaces/kubernetesdashboard/services/https:kubernetes-dashboard:/proxy/#/log/default/welcomemicroservice8fcc9cc-4b8c8/pod?namespace=default&container=welcomemicroservice
Enter the generated token to login.
