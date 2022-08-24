node {  
    stage('Build') { 
        def nodeNames() {
                        return jenkins.model.Jenkins.instance.nodes.collect { node -> node.name }
                        }
        def branches = [:]
        def names = nodeNames()
        for (int i=0; i<names.size(); ++i) {
            def nodeName = names[i];  
            echo "Triggering on " + nodeName
            }
    }
    stage('Test') { 
         
    }
    stage('Deploy') {  
        
    }
}
