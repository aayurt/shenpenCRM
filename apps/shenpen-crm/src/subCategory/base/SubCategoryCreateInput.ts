/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CategoryCreateNestedManyWithoutSubCategoriesInput } from "./CategoryCreateNestedManyWithoutSubCategoriesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SubCategoryCreateInput {
  @ApiProperty({
    required: false,
    type: () => CategoryCreateNestedManyWithoutSubCategoriesInput,
  })
  @ValidateNested()
  @Type(() => CategoryCreateNestedManyWithoutSubCategoriesInput)
  @IsOptional()
  @Field(() => CategoryCreateNestedManyWithoutSubCategoriesInput, {
    nullable: true,
  })
  categoryId?: CategoryCreateNestedManyWithoutSubCategoriesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;
}

export { SubCategoryCreateInput as SubCategoryCreateInput };
