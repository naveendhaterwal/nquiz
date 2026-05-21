import re

explanations = {
    "supports What-if analysis": "Parameter supports What-if analysis as it allows users to input arbitrary values into calculations. Maps are for spatial data, Hierarchies for drill-downs, and Unions for appending rows vertically.",
    "combine yearly datasets": "Union appends data vertically (row-wise), making it perfect for identical schemas like yearly logs. Inner Joins merge horizontally, while Relationships handle different granularities.",
    "Assertion (A): KPI cards are usually placed near the top": "Both A and R are true, and R explains A. The F-pattern dictates users scan top-to-bottom, making the top area prime real estate for crucial KPIs.",
    "categorizes records as IN or OUT": "Sets categorize data into two groups: IN the set or OUT of the set. Hierarchies define drill paths, and Parameters are user inputs.",
    "sliders and dropdowns": "Parameters allow user-driven input (like sliders or dropdowns) that can be passed into calculations or filters dynamically.",
    "requires identical columns": "Union requires identical column names and types because it stacks tables vertically. Joins and Relationships combine tables horizontally using keys.",
    "Product Name on Rows": "Loss Making Products typically uses Product Name on rows to list underperforming items vertically. 'Sales by Segment' uses Segment.",
    "AI-driven insights": "Tableau Pulse provides AI-driven insights and automated metrics. Story points are for presentations, Hyper is the data engine.",
    "statements about Tableau Parameters": "Parameters are global and can drive calculations (1 and 3). However, statement 2 is false—parameters do nothing on their own until tied to a filter or calculation.",
    "stacks rows vertically": "Union stacks rows vertically. Joins, Blends, and Relationships merge data horizontally by adding columns based on related keys.",
    "Set type updates automatically": "Dynamic Sets evaluate conditions continuously, meaning their members update automatically as underlying data changes. Manual/Static sets remain fixed.",
    "chart type was used for Sales by Segment": "A Bar chart is the best practice for comparing categorical data like Sales by Segment.",
    "keeps tables logically separate": "Relationships (the 'noodle') exist in the Logical Layer and keep tables logically separate. Joins physically merge tables into a flat structure.",
    "phase comes after Wireframing": "Build Sheets. After designing the layout (Wireframing), you build the individual worksheets before assembling the Dashboard.",
    "top-level filters and title": "The Top Strip Rule suggests placing the dashboard title and global filters in a horizontal strip at the very top for clear context.",
    "returns only matching rows": "An Inner Join returns only rows that have matching keys in both tables. Left/Right joins keep unmatched rows from one side.",
    "user eye movement": "The F-Pattern Rule states that users scan screens in an F-shape (top-left to top-right, then down). Dashboards should match this eye movement.",
    "statements regarding Relationships": "Relationships query data dynamically and handle different granularities without duplicating rows (1 and 3). Physical merging is done by Joins (2 is false).",
    "Assertion (A): Relationships help avoid duplicate aggregations": "Because Relationships keep tables logically separate and only query them at their native level of detail, they inherently prevent the data duplication issues common in Joins.",
    "behaves most like a variable": "Parameters behave exactly like variables in programming. They hold a value that can be changed by the user and referenced across calculations.",
    "occurs in the Physical Layer": "Join creation happens in the Physical Layer, physically merging tables. Relationships operate above this in the Logical Layer.",
    "every chart must answer a business question": "The One Question Rule ensures dashboards remain focused and actionable, advising that every visual should answer a specific business question.",
    "limiting KPI count": "The KPI Row Rule recommends keeping the number of KPIs to a manageable number (usually 3-5) to avoid overwhelming the user.",
    "controlled Size in the map demo": "Sales is a common magnitude measure used to control the Size of marks on a map, whereas Profit is typically used for Color.",
    "auto-generates maps": "Data roles (assigning Geographic Roles) allow Tableau to automatically generate coordinates (Latitude/Longitude) for mapping.",
    "controlled shading in Profit by Region": "Profit is best represented via color/shading to show positive vs. negative performance, while Region defines the map boundaries.",
    "controls color encoding": "The Color shelf on the Marks card applies color encodings to marks based on dimensions or measures.",
    "combines tables using matching keys": "Joins combine tables horizontally by matching a common key field. Unions stack tables vertically."
}

def get_expl(q_text):
    for key, val in explanations.items():
        if key.lower() in q_text.lower():
            return val
    return "This is the correct answer according to the exam pattern key. Other options represent different Tableau functionalities that do not fit the specific scenario described."

with open('/Users/n2/Documents/nquiz/nextjs/public/tableau_final_exam_pattern_50_mcqs.md', 'r') as f:
    content = f.read()

blocks = re.split(r'## Q\d+', content)[1:]

js_output = "const dpp7 = {\n  id: 'dva-7',\n  numId: 7,\n  title: 'Tableau Final Exam Pattern',\n  topic: 'Tableau',\n  questions: [\n"

for block in blocks:
    lines = [line.strip() for line in block.strip().split('\n')]
    
    q_lines = []
    options = []
    answer = None
    
    for line in lines:
        if line.startswith('A. '):
            options.append(line[3:])
        elif line.startswith('B. '):
            options.append(line[3:])
        elif line.startswith('C. '):
            options.append(line[3:])
        elif line.startswith('D. '):
            options.append(line[3:])
        elif line.startswith('**Answer:**'):
            ans_letter = line.split('**Answer:**')[1].strip()
            answer = ord(ans_letter) - ord('A')
        elif line == '---':
            pass
        elif line != '' and not options and answer is None:
            q_lines.append(line)
            
    q_text = '<br>'.join(q_lines).replace("'", "\\'")
    options_str = ",\n        ".join(f"'{o.replace(chr(39), chr(92)+chr(39))}'" for o in options)
    expl_text = get_expl(q_text).replace("'", "\\'")
    
    js_output += f"    {{\n      q: '{q_text}',\n      a: [\n        {options_str}\n      ],\n      correct: {answer},\n      expl: '{expl_text}',\n      weightage: 2,\n    }},\n"

js_output += "  ],\n};\n\nexport const dvaData = [dpp1, dpp2, dpp3, dpp4, dpp5, dpp6, dpp7];\n"

with open('/Users/n2/Documents/nquiz/nextjs/data/dvaData.js', 'r') as f:
    js_content = f.read()

parts = js_content.split('const dpp7 =')
new_content = parts[0] + js_output

with open('/Users/n2/Documents/nquiz/nextjs/data/dvaData.js', 'w') as f:
    f.write(new_content)

print("Explanations added successfully!")
