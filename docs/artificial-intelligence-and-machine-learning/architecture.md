---
layout: post
title: Architecture of AI Assistant | Bold BI Documentation
description: Explore the architecture of the AI Assistant and learn how it transforms user queries into visualizations using natural language processing. 
canonical: "/artificial-intelligence-and-machine-learning/architecture/"
platform: bold-bi
documentation: ug
---


# Bold BI AI Architecture Overview

Bold BI incorporates a natural language processing (NLP) interface that enables users to interact with business intelligence data using plain english queries. This capability supports the generation of visualizations, textual summaries, business insights, and contextual responses directly within the platform.

The AI functionality in Bold BI is described through two complementary architectural perspectives:

1. **Bold BI NLP Architecture** 

-  Represents the complete, end-to-end process within the Bold BI application from user query submission through to the final rendering of visualizations in the dashboard.

2. **Bold BI AI Service Architecture** 

 - Describes the dedicated, AI service layer responsible for secure intent detection, governance, LLM orchestration, reasoning, guardrails, and structured output generation. This service powers the natural language capabilities across the Bold BI platform.

## Bold BI NLP Architecture

This document outlines the process flow for using the AI feature within Bold BI to generate visualizations from user queries via natural language processing (NLP).

![AI-Assistant-Architecture](/static/assets/artificial-intelligence-and-machine-learning/images/architecture/boldbi-nlp-architecture.png)

**1. AI Feature Interface**

- Users can interact with the AI feature interface to submit natural language queries.
- This interface allows users to request visualizations by describing their requirements in a simple query format.

**2. Input Preparation**

- Once a query is submitted, it is sent to the Bold Dashboard Service.
- The service prepares the input by combining the user's query with the datasource metadata which will include the customer datasource details such as Table names, columns and their data type.

**3. Prompt Creation**

- The prepared input (user query + datasource metadata) is then passed to the Bold AI Service for prompt creation.
- A prompt is formulated to contact the large language model (LLM) from OpenAI, requesting an AI-generated response based on the user's input.

**4. LLM Processing**

- The created prompt is processed by the selected LLM, which generates a raw AI response.
- This response contains potential data for visualization or appropriate response for the user's query.

**5. Extracting Visualization Properties**

- The raw AI response is then analyzed to extract visualization properties, which include information about the type of chart and fields to build the visualization.

**6. Converting to Bold BI Visualization Properties**

- The extracted visualization properties are converted into a format that is compatible with Bold BI.

**7. Validation of Visualization Properties**

- The converted visualization properties are validated to ensure they align with the data structure and user preferences.

**8. Data Fetching**

- Once the visualization properties are validated, the required data is fetched from the Bold Datastore or a Live Database.
- An SQL query is generated to retrieve the relevant data for the requested visualization.

**9. Creating and Rendering Visualizations**

- The visualization is created based on the retrieved data and the validated properties.
- Finally, the Bold BI Dashboard renders the visualization, which the user can interact with or further customize its properties.

## Bold BI AI Service Architecture

This document describes Bold BI's secure, governed AI Service architecture—an intelligent backend that processes natural language queries through semantic understanding, enforces strict access controls, leverages advanced LLM reasoning, orchestrates Agentic workflows, and executes entirely within the Bold BI platform.

![AI-Assistant-Architecture](/static/assets/artificial-intelligence-and-machine-learning/images/architecture/AiServiceArchitecture.png)

**1. Client Query**

- The entry point of the architecture where users submit their queries. 
- This serves as the initial input that triggers the entire Bold BI AI flow, directing the query into the semantic kernel for processing.

**2. BI Server (Auth + RBAC + RLS)**

- A core component of the Bold BI platform that manages authentication, role-based access control (RBAC), and row-level security (RLS). 
- It ensures secure access to data and applies permissions on every request, integrating with visualization, data services, and dashboard building.

 **3. Intent Classification**

- This module analyzes the client query to determine its intent, such as requests for visuals, summaries, or text-based outputs. 
- It identifies relevant tasks, tables, schema, and metadata, while blocking sensitive requests involving credentials or admin/user information.

**4. AI Guardrails**

- A protective layer that filters out off-domain queries and potential misuse. 
- It enforces compliance by rejecting inappropriate or unauthorized requests, ensuring the system remains secure and focused on valid business intelligence operations.

**5. Agentic Orchestration**

- Responsible for coordinating actions based on the classified intent, including function calling for appropriate responses like visuals, summaries, or text. 
- It employs the ReAct (Reason + Act) pattern to iteratively reason and execute steps, orchestrating the flow toward the LLM.
**6. Structured Prompt + Schema Injection**

- This prepares inputs for the LLM by injecting structured prompts that include dataset schemas, allowed operations, visualization rules, and contextual memory. 
- It ensures the LLM generates accurate, context-aware responses aligned with the system's constraints and user needs.

**7. LLM Output**

- The output generated by the Large Language Model (LLM), such as Open AI or Azure Open AI. 
-  It produces structured results like JSON for visuals, valid SQL queries, business summaries, and suggestive insights or questions to enhance user interaction.

**8. Execution**

- Handles the actual processing of queries through BOLD BI Tools. 
- This includes executing SQL only within the secure Bold BI environment, rendering charts via the Visualization Engine, and applying RBAC + RLS on every request to maintain data integrity and security.