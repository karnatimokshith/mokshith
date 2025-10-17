pipeline {
  agent {
    docker {
      image 'node:20-bullseye'
      args '-u root:root'
    }
  }
  
  options {
    timestamps()
    ansiColor('xterm')
  }

  environment {
    # Set base path for Vite when deploying to GitHub Pages
    VITE_BASE = "/${env.JOB_NAME?.split('/')[-1] ?: ''}/"
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        sh 'node -v && npm -v'
        sh 'npm ci'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Typecheck') {
      steps {
        sh 'npm run typecheck'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
        archiveArtifacts artifacts: 'dist/**', fingerprint: true, allowEmptyArchive: true
      }
    }

    stage('Deploy (GitHub Pages)') {
      when {
        allOf {
          branch 'main'
          expression { return env.DEPLOY_PAGES?.toBoolean() }
        }
      }
      environment {
        GH_TOKEN = credentials('github-pages-token')
        GITHUB_REPOSITORY = credentials('github-repo-fullname')
      }
      steps {
        sh '''
          set -e
          git config --global user.email "ci@jenkins"
          git config --global user.name "Jenkins CI"
          rm -rf gh-pages
          mkdir gh-pages
          cp -r dist/* gh-pages/
          cd gh-pages
          git init
          git remote add origin https://${GH_TOKEN}@github.com/${GITHUB_REPOSITORY}.git
          git checkout -b gh-pages
          touch .nojekyll
          git add .
          git commit -m "Deploy from Jenkins ${BUILD_NUMBER}"
          git push -f origin gh-pages
        '''
      }
    }
  }

  post {
    always {
      junit allowEmptyResults: true, testResults: 'reports/junit/*.xml'
    }
    failure {
      echo 'Build failed.'
    }
    success {
      echo 'Build succeeded.'
    }
  }
}


