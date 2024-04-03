---
layout: post
title: OpenAI-fine-tuning utility - Embedded BI | Bold BI Docs
description: Learn and unlock the secrets to building a finely-tuned OpenAI model tailored specifically for seamless integration into BoldBI’s Q&A widget.
canonical: "/utilities/fine-tuning-utility/"
platform: bold-bi
documentation: ug
---

# Instructions to fine-tune a new OpenAI GPT 3.5 model 
To run the OpenAI fine-tuning utility, follow these steps:

## Steps to run in Windows

1. Open the Command Prompt: Press `Win + R` on your keyboard, type `cmd`, and enter to open the Command Prompt window.

2. Navigate to the Directory: Use the `cd` command to change directories to where the OpenAI trainer utility is located.
   ```bash
   cd <:INSTALLED_DIRECTORY>\BoldServices\utilities\openai_trainer
   ```
   
3. Execute the Application: Once in the correct directory, run the executable file by typing the following command, replacing `<:API_KEY>` with your actual OpenAI API key.
   ```bash
   OpenAITrainer.exe -provider OpenAI -OpenAIKey <:API_KEY>
   ```
   Ensure to replace `<:API_KEY>` with the API key provided to you by OpenAI.

>**NOTE** : You can generate your API key by visiting the OpenAI portal at https://platform.openai.com/api-keys.

![Running the command](/static/assets/fine-tuning-utility/OpenAI_command.png)

## Steps to run in Linux

1. Open a Terminal: Open a terminal using the appropriate key combination (e.g., `Ctrl + Alt + T`).

2. Navigate to the Directory: Use the `cd` command to change directories to where the OpenAI trainer utility is located.
   
   ```bash
   cd /var/www/bold-services/application/utilities
   ```
3. Once in the correct directory, run the dll file by typing the following command, replacing `<:API_KEY>` with your actual OpenAI API key.

   ```bash
   /var/www/bold-services/dotnet/dotnet OpenAITrainer.dll -provider OpenAI -OpenAIKey <:API_KEY>
   ```
## Steps to run in Docker

1. Run the following command to list all the containers and note the `BoldBI container name`.
   
   ```bash
   docker ps
   ```
2. Execute the following command for bashing boldbi running container.

   ```bash
   docker exec -it <BoldBI container name> bash 
   ```
3. Navigate to the Directory: Use the `cd` command to change directories to where the OpenAI trainer utility is located.

   ```bash
   cd /application/utilities/openai_trainer
   ```
4. Once in the correct directory, run the dll file by typing the following command, replacing `<:API_KEY>` with your actual OpenAI API key.

   ```bash
   dotnet OpenAITrainer.dll -provider OpenAI -OpenAIKey <:API_KEY>
   ```
Once the training and validation JSONL files are uploaded for fine-tuning a machine-learning model, the system will begin processing the data. During this time, you will receive a `jobId`, which is a unique identifier for your fine-tuning task. This ID allows you to track the progress of your fine-tuning job.

## Status of fine-tuning
The system will also provide you with `status` updates. The status indicates the current stage of the fine-tuning process. Initially, the status will show as `validating_files` as the system prepares and starts the training with your data.

Subsequently, the status will transition to `running` and persist until the fine-tuning process succeeds or encounters a failure.

Hitting the `esc` key triggers the termination process for the ongoing fine-tuning task.

![Fine-tuning_Cancellation](/static/assets/fine-tuning-utility/Fine-tuning_Cancellation-OpenAI.png)

The `status` of the fine-tuning job will be displayed after every one minute.

![Fine-tuning_Status](/static/assets/fine-tuning-utility/Fine-tuning_Status.png)

## Post fine-tuning

After a successful fine-tuning process, the console will display the name of the fine-tuned model. It is important to make a note of this model name for future use-cases and configure it in BoldBI.

> **NOTE** : An error message will be displayed if an error occurs during the fine-tuning process.

![Fine_Tuned_Model](/static/assets/fine-tuning-utility/Fine_Tuned_Model.png)

## Steps to update fine-tuned model name

### Bold BI version between 7.1 and 7.5 

1. Go to `Manage Sites`.

![Manage_Sites](/static/assets/fine-tuning-utility/Manage_Sites.png)

2. Inside the `Settings` tab, go to the `Configuration` tab.

![Settings](/static/assets/fine-tuning-utility/Settings.png)

3. In the `config.json` file set the OpenAI key and OpenAI model fine-tuned name.

![Model_Name_in_config.json](/static/assets/fine-tuning-utility/Model_Name_in_config.png)

### Syntax
```json
"QnA": {
        "Enable": true,
        "OpenAiKey": "<:API_KEY>",
        "OpenAiModelName": "<:MODEL_NAME>"
      }
```

4. Replace `<:API_KEY>` and `<:MODEL_NAME>` with your apiKey and fine-tuned model name.

5. Restart the Internet Information Services (IIS) Manager and refresh the dashboard.

### Bold BI version 7.5 or later 

1. Go to `Manage Sites`.

![Manage_Sites](/static/assets/fine-tuning-utility/Manage_Sites.png)

2. Inside `Settings` tab and go the `Configuration` tab.

![Settings](/static/assets/fine-tuning-utility/Settings.png)

3. In the `config.json` file you will find by default OpenAI Active as `true` and AzureAI Active as `false`.

![Updated_config.json](/static/assets/fine-tuning-utility/Updatedconfigfile.png)

4. Replace `<:API_KEY>` and `<:MODEL_NAME>` with your apiKey and fine-tuned model name.

![OpenAI_config_file_change](/static/assets/fine-tuning-utility/Openai.png)

#### Syntax
```json
   "OpenAI":{
     "Active":true,
     "OpenAiKey": "<:API_KEY>",
     "OpenAiModelName": "<:MODEL_NAME>"
   }
```
> **NOTE** Ensure the Active is `true` for OpenAI and `false` for AzureAI.

5. Restart the Bold BI services and open the dashboard.

> **NOTE:**  Fine-tuning once will cost approximately $13 USD. Each search in the Q&A widget will incur a cost based on the pricing of the OpenAI fine-tuned model (https://openai.com/pricing), where the number of input and output tokens depends on the question and the data sources connected to the dashboard.