from graphviz import Digraph

def create_nexusplay_flow():
    dot = Digraph(comment='NexusPlay Task Flow')
    dot.attr(rankdir='TB', size='10,10')
    
    # Global Node Styles
    dot.attr('node', shape='rectangle', style='filled, rounded', 
             color='#5D5FEF', fontcolor='white', fontname='Arial', fontsize='12')

    # Task 1: Launching a Game
    dot.node('A', 'Login / Sign In')
    dot.node('B', 'View Home Dashboard')
    dot.node('C', 'Navigate to Library / Continue Playing')
    dot.node('D', 'Select Specific Game (e.g., Elden Ring)')
    dot.node('E', 'View Stats & Playtime')
    dot.node('F', 'Click Manage / Launch Game')

    dot.edges(['AB', 'BC', 'CD', 'DE', 'EF'])

    # Task 2: Discovering Free Games (Parallel branch)
    dot.node('G', 'Navigate to Store')
    dot.node('H', 'Select "Free Games" Tab')
    dot.node('I', 'View "Ghostrunner" Deal')
    dot.node('J', 'Claim Game Now')
    dot.node('K', 'Verify in Library')

    dot.edge('B', 'G')
    dot.edges(['GH', 'HI', 'IJ', 'JK'])

    # Render
    dot.render('nexusplay_task_flow', format='png', cleanup=True)
    print("Flowchart 'nexusplay_task_flow.png' has been created.")

if __name__ == "__main__":
    create_nexusplay_flow()
