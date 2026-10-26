---
layout: post
title: OpenAI Fine-Tuning Utility - Embedded BI | Bold BI Docs
description: Learn and unlock the secrets to building a finely tuned OpenAI model tailored specifically for seamless integration into Bold BI’s Q&A widget.
canonical: "/utilities/fine-tuning-utility/"
platform: bold-bi
documentation: ug
---

# Instructions to Fine-Tune a New OpenAI GPT 3.5 Model 
To run the OpenAI fine-tuning utility, follow these steps:

## Steps to Run in Windows

1. Open the Command Prompt: Press `Win + R` on your keyboard, type `cmd`, and press Enter to open the Command Prompt window.

2. Navigate to the Directory: Use the `cd` command to change directories to where the OpenAI trainer utility is located.
   ```bash
   cd <:INSTALLED_DIRECTORY>\BoldServices\utilities\openai_trainer
   ```
   
3. Execute the Application: Once in the correct directory, run the executable file by typing the following command, replacing `<:API_KEY>` with your actual OpenAI API key.
   ```bash
   OpenAITrainer.exe -provider OpenAI -OpenAIKey <:API_KEY>
   ```
   Be sure to replace `<:API_KEY>` with the API key provided to you by OpenAI.

> **NOTE:** You can generate your API key by visiting the OpenAI portal at https://platform.openai.com/api-keys.

![Running the command](/static/assets/fine-tuning-utility/OpenAI_command.png)

## Steps to Run in Linux

1. Open a Terminal: Open a terminal using the appropriate key combination (e.g., `Ctrl + Alt + T`).

2. Navigate to the Directory: Use the `cd` command to change directories to where the OpenAI trainer utility is located.
   
   ```bash
   cd /var/www/bold-services/application/utilities/openai_trainer
   ```
3. Once in the correct directory, run the DLL file by typing the following command, replacing `<:API_KEY>` with your actual OpenAI API key.

   ```bash
   /var/www/bold-services/dotnet/dotnet OpenAITrainer.dll -provider OpenAI -OpenAIKey <:API_KEY>
   ```
## Steps to Run in Docker

1. Run the following command to list all the containers and note the `BoldBI container name`.
   
   ```bash
   docker ps
   ```
2. Execute the following command to bash into the running Bold BI container.

   ```bash
   docker exec -it <BoldBI container name> bash 
   ```
3. Navigate to the Directory: Use the `cd` command to change directories to where the OpenAI trainer utility is located.

   ```bash
   cd /application/utilities/openai_trainer
   ```
4. Once in the correct directory, run the DLL file by typing the following command, replacing `<:API_KEY>` with your actual OpenAI API key.

   ```bash
   dotnet OpenAITrainer.dll -provider OpenAI -OpenAIKey <:API_KEY>
   ```
Once the training and validation JSONL files are uploaded for fine-tuning a machine-learning model, the system begins processing the data. During this time, you receive a `jobId`, which is a unique identifier for your fine-tuning task. This ID allows you to track the progress of your fine-tuning job.

## Status of Fine-Tuning
The system also provides you with `status` updates. The status indicates the current stage of the fine-tuning process. Initially, the status shows as `validating_files` as the system prepares and starts the training with your data.

Subsequently, the status transitions to `running` and persists until the fine-tuning process succeeds or encounters a failure.

Hitting the `esc` key triggers the termination process for the ongoing fine-tuning task.

![Fine-tuning_Cancellation](/static/assets/fine-tuning-utility/Fine-tuning_Cancellation-OpenAI.png)

The `status` of the fine-tuning job is displayed every minute.

![Fine-tuning_Status](/static/assets/fine-tuning-utility/Fine-tuning_Status.png)

## Post Fine-Tuning

After a successful fine-tuning process, the console displays the name of the fine-tuned model. It is important to make a note of this model name for future use cases and configure it in Bold BI.

> **NOTE:** An error message is displayed if an error occurs during the fine-tuning process.

![Fine_Tuned_Model](/static/assets/fine-tuning-utility/Fine_Tuned_Model.png)

## Steps to Update Fine-Tuned Model Name

### Bold BI Version Between 7.1 and 7.5 

1. Go to `Manage Sites`.

![Manage_Sites](/static/assets/fine-tuning-utility/Manage_Sites.png)

2. Inside the `Settings` tab, go to the `Configuration` tab.

![Settings](/static/assets/fine-tuning-utility/Settings.png)

3. In the `config.json` file, set the OpenAI key and the fine-tuned OpenAI model name.

![Model_Name_in_config.json](/static/assets/fine-tuning-utility/Model_Name_in_config.png)

### Syntax
```json
"QnA": {
        "Enable": true,
        "OpenAiKey": "<:API_KEY>",
        "OpenAiModelName": "<:MODEL_NAME>"
      }
```

4. Replace `<:API_KEY>` and `<:MODEL_NAME>` with your API key and fine-tuned model name.

5. Restart the Internet Information Services (IIS) Manager and refresh the dashboard.

### Bold BI Version 7.5 or Later 

1. Go to `Manage Sites`.

![Manage_Sites](/static/assets/fine-tuning-utility/Manage_Sites.png)

2. Inside the `Settings` tab, go to the `Configuration` tab.

![Settings](/static/assets/fine-tuning-utility/Settings.png)

3. In the `config.json` file, you will find OpenAI Active set to `true` and AzureAI Active set to `false` by default.

![Updated_config.json](/static/assets/fine-tuning-utility/Updatedconfigfile.png)

4. Replace `<:API_KEY>` and `<:MODEL_NAME>` with your API key and fine-tuned model name.

![OpenAI_config_file_change](/static/assets/fine-tuning-utility/Openai.png)

#### Syntax
```json
   "OpenAI":{
     "Active":true,
     "OpenAiKey": "<:API_KEY>",
     "OpenAiModelName": "<:MODEL_NAME>"
   }
```
> **NOTE:** Ensure that Active is `true` for OpenAI and `false` for AzureAI.

5. Restart the Bold BI services and open the dashboard.

> **NOTE:** Fine-tuning once costs approximately $25 USD. Each search in the Q&A widget incurs a cost based on the pricing of the OpenAI fine-tuned model (https://openai.com/pricing), where the number of input and output tokens depends on the question and the data sources connected to the dashboard.